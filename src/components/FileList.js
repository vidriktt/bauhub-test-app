import FeatherIcon from 'feather-icons-react';

function FileList() {
    return (
        <div className="relative overflow-x-auto">
            <table className="table-fixed w-full text-sm text-left">
                <thead className="text-sm">
                    <tr>
                        <th scope="col" className="p-2 w-10">
                            <div className="flex items-center">
                                <input id="checkbox-all-files" type="checkbox" className="w-5 h-5 accent-dark-jungle bg-gray-100 border-pigeon-40 rounded cursor-pointer" />
                            </div>
                        </th>
                        <th scope="col" className="w-10">
                        </th>
                        <th scope="col" className="p-3 w-auto">
                        </th>
                        <th scope="col" className="p-3 w-[6rem]">
                            Allkirjad
                        </th>
                        <th scope="col" className="p-3 w-[6rem]">
                            Versioon
                        </th>
                        <th scope="col" className="p-3 w-1/4">
                            Uuendatud
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-pigeon-40 hover:bg-gray-50">
                        <td className="p-2">
                            <div className="flex items-center">
                                <input id="checkbox-file-1" type="checkbox" className="w-5 h-5 accent-dark-jungle bg-gray-100 border-pigeon-40 rounded cursor-pointer" />
                            </div>
                        </td>
                        <td className="pl-3">
                            <FeatherIcon icon="folder" size="18" />
                            {/* clock ; x-circle */}
                        </td>
                        <td className="px-3 py-2">
                            Hankedokumendid-5
                        </td>
                        <td className="px-3 py-2">
                        </td>
                        <td className="px-3 py-2">
                        </td>
                        <td className="px-3 py-2">
                            <div className="flex flex-col">
                                <p>12.12.2021 00:00</p>
                                <p className="text-xs opacity-80">Anne Salat</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FileList;
