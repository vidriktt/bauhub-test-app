import React, { useState, useEffect } from 'react';
import FileList from './FileList';
import FeatherIcon from 'feather-icons-react';

function App() {
    const [filesArr, setFilesArr] = useState([]);
    const [checkedArr, setCheckedArr] = useState([]);

    useEffect(() => {
        setFilesArr(fetchAllFiles);
    }, []);

    function fetchAllFiles() {
        return [{
            "id": "1",
            "name": "Hankedokumendid-5",
            "type": "FOLDER",
            "created": "2022-02-01 00:00:49.231+02",
            "createdBy": "Anne Salat"
        },
        {
            "id": "2",
            "name": "Allkirjastamiseks-1.asice",
            "type": "CONTAINER",
            "created": "2022-02-03 00:00:49.231+02",
            "createdBy": "Anne Salat",
            "status": "SIGNING",
            "totalSigners": "3",
            "signedBy": "2",
            "version": "1"
        },
        {
            "id": "3",
            "name": "Kontrollakt.pdf",
            "type": "FILE",
            "created": "2022-02-05 00:00:49.231+02",
            "createdBy": "Projektijuht Mihkel-Oliver",
            "version": "3"
        },
        {
            "id": "4",
            "name": "Allkirjastamiseks-3.asice",
            "type": "CONTAINER",
            "created": "2022-02-04 00:00:49.231+02",
            "createdBy": "Anne Salat",
            "status": "DECLINED",
            "totalSigners": "4",
            "signedBy": "1",
            "version": "1"
        },
        {
            "id": "5",
            "name": "Hankedokumendid-6",
            "type": "FOLDER",
            "created": "2022-02-02 00:00:49.231+02",
            "createdBy": "Anne Salat"
        }]
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

    function onChangeCheckboxAll(target) {
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
                <button className="m-1.5 curson-pointer enabled:hover:opacity-80" disabled>
                    <FeatherIcon icon="trash" size="18" />
                </button>
            </div>
            <FileList filesArr={filesArr} onChangeCheckbox={onChangeCheckbox} onChangeCheckboxAll={onChangeCheckboxAll} />
        </div>
    );
}

export default App;
