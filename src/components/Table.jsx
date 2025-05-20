import React from 'react'

const Table = ({ handleEdit, handleDelete, tableData }) => {
    return (
        <table className='border border-black w-[60%] mx-auto mt-6'>
            <thead className='bg-gray-400'>
                <tr>
                    <th className='p-2   border border-black'>Name</th>
                    <th className='p-2  border border-black'>Email</th>
                    <th className='p-2  border border-black'>Action</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td className='py-2 px-4  border border-black'>{data.name}</td>
                            <td className='py-2 px-4  border border-black'>{data.email} </td>
                            <td className='py-2 px-4 border border-black'>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded'
                                    onClick={
                                        () => {
                                            handleEdit(idx);
                                        }
                                    }>edit</button>
                                <button className='ml-2 bg-red-500 text-white px-4 py-2 rounded'
                                    onClick={
                                        () => {
                                            handleDelete(idx);
                                        }}>delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table >
    )
}

export default Table