import { format, parseISO } from 'date-fns'
import FeatherIcon from 'feather-icons-react';

function FileList({ filesArr, onChangeCheckbox, onChangeCheckboxAll }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="table-fixed w-full text-sm text-left">
                <thead className="text-sm">
                    <tr>
                        <th scope="col" className="p-1 w-8">
                            <div className="flex items-center">
                                <input id="checkbox-all-files" type="checkbox" className="w-5 h-5 accent-dark-jungle bg-gray-100 border-pigeon-40 rounded cursor-pointer" onChange={e => onChangeCheckboxAll(e.target)} />
                            </div>
                        </th>
                        <th scope="col" className="w-10">
                        </th>
                        <th scope="col" className="p-2 w-auto">
                        </th>
                        <th scope="col" className="p-2 w-[6rem] text-[13px]">
                            Allkirjad
                        </th>
                        <th scope="col" className="p-2 w-[6rem] text-[13px] text-center">
                            Versioon
                        </th>
                        <th scope="col" className="p-2 w-1/4 text-[13px]">
                            Uuendatud
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filesArr.map((file) => {
                        return <tr key={file.id} id={"tr-" + file.id} className="border-t border-pigeon-40 hover:bg-gray-50">
                            <td className="p-1">
                                <div className="flex items-center">
                                    <input id={"checkbox-file-" + file.id} type="checkbox" className="w-5 h-5 accent-dark-jungle bg-gray-100 border-pigeon-40 rounded cursor-pointer" onChange={e => onChangeCheckbox(e.target)} />
                                </div>
                            </td>
                            {file.type === "FOLDER" ? (
                                <td className="pl-2.5">
                                    <FeatherIcon icon="folder" size="18" />
                                </td>
                            ) : (
                                <td className="">
                                    {file.type === "CONTAINER" ? (
                                        <div className="mx-[0.15rem] py-1 text-[8px] text-center font-black text-[#0A3776] bg-[#E4EBF4] border-2 rounded-sm">ASICE</div>
                                    ) : (
                                        <div className="mx-[0.15rem] py-1 text-[10px] text-center font-black text-[#BB2612] bg-[#F6ECEA] border-2 rounded-sm">PDF</div>
                                    )}
                                </td>
                            )}
                            {/* clock ; x-circle */}
                            <td className="p-2">
                                {file.name}
                            </td>
                            <td className="p-2">
                                {file.status && (file.status === "SIGNING" ? (
                                    <div className="bg-warning-yellow-10 text-center flex justify-center">
                                        <FeatherIcon icon="clock" size="18" />
                                        <span className="text-[13px] font-bold">{file.signedBy}/{file.totalSigners}</span>
                                    </div>
                                ) : (
                                    <div></div>
                                ))}
                            </td>
                            <td className="p-2 text-center">
                                {file.version}
                            </td>
                            <td className="p-2">
                                <div className="flex flex-col">
                                    <p>{format(parseISO(file.created), "dd.MM.yyyy mm:HH")}</p>
                                    <p className="text-xs opacity-80">{file.createdBy}</p>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FileList;
