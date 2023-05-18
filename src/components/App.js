import React, { useState, useEffect } from 'react';
import FileList from './FileList';
import FeatherIcon from 'feather-icons-react';

function App() {
    const [filesArr, setFilesArr] = useState([]);
    const [checkedArr, setCheckedArr] = useState([]);

    useEffect(() => {
        const abortControler = new AbortController()
        const timeout = setTimeout(() => {
            abortControler.abort()
        }, 600)

        fetch("data/files.json", {
            signal: abortControler.signal
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            setFilesArr(response);
        });

        clearTimeout(timeout)
    }, []);

    useEffect(() => {
        const trashBtn = document.getElementById("trash-button");
        checkedArr.length > 0 ? trashBtn.disabled = false : trashBtn.disabled = true;
    }, [checkedArr]);

    function deleteFilesMock(ids) {
        const timeout = setTimeout(function(){
            console.log(ids);
            for (let i = 0; i < filesArr.length; i++) {
                if (ids.includes(filesArr[i].id)) {
                    filesArr.splice(i, 1);
                    
                    for (let j = 0; j < checkedArr.length; j++) {
                        checkedArr.splice(j, 1);
                    }
                }
            }
        }(), 600);
        clearTimeout(timeout);
    }

    function onChangeCheckbox(target) {
        let targetId = target.id.split("-")[2];
        let tr = document.getElementById("tr-" + targetId);

        if (target.checked) {
            tr.classList.add("bg-mint");
            tr.classList.add("hover:bg-opacity-75");
            tr.classList.remove("hover:bg-gray-50");
        } else {
            tr.classList.remove("bg-mint");
            tr.classList.remove("hover:bg-opacity-75");
            tr.classList.add("hover:bg-gray-50");
        }

        if (target.checked) {
            setCheckedArr(checkedArr => [...checkedArr, targetId]);
        } else {
            setCheckedArr(checkedArr.filter(e => e !== targetId));
        }
    }

    function onChangeCheckboxAll() {
        let trArr = document.getElementsByTagName("tbody")[0].childNodes;

        if (checkedArr.length === filesArr.length) {
            setCheckedArr([]);
            trArr.forEach(tr => {
                tr.classList.remove("bg-mint");
                tr.classList.remove("hover:bg-opacity-75");
                tr.classList.add("hover:bg-gray-50");
                tr.getElementsByTagName("input")[0].checked = false;
            });
        } else {
            setCheckedArr([...Array(filesArr.length + 1).keys()].slice(1).map(String));
            trArr.forEach(tr => {
                tr.classList.add("bg-mint");
                tr.classList.add("hover:bg-opacity-75");
                tr.classList.remove("hover:bg-gray-50");
                tr.getElementsByTagName("input")[0].checked = true;
            });
        }
    }

    function onClickTrash(target) {
        if (!target.disabled) {
            deleteFilesMock(checkedArr);
        }
    }

    return (
        <div className="container max-w-5xl mx-auto mt-12">
            <nav className="flex mb-2 p-1">
                <ol className="inline-flex items-center space-x-1">
                    <li className="inline-flex items-center">
                        <a href="/#" className="inline-flex items-center text-sm font-medium opacity-80 hover:opacity-60">
                            Dokumendid
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <FeatherIcon icon="chevron-right" size="16" />
                            <a href="/#" className="ml-1 text-sm font-bold hover:opacity-80">Hankedokumendid</a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="mb-4">
                <button id="trash-button" className="m-1.5 curson-pointer enabled:hover:opacity-80" onClick={e => onClickTrash(e.currentTarget)}>
                    <FeatherIcon icon="trash" size="18" />
                </button>
            </div>

            <FileList filesArr={filesArr} onChangeCheckbox={onChangeCheckbox} onChangeCheckboxAll={onChangeCheckboxAll} />
        </div>
    );
}

export default App;
