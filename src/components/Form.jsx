import React from 'react'

const Form = ({editIndex,formData, handleFormDataChange, handleSubmit }) => {

    return (
        <form action="" className="rounded border my-40 mx-auto p-6 w-72 h-50 border-gray-500 " onSubmit={handleSubmit}>
            <table className="p-2  ">
                <tbody>
                    <tr>
                        <td className="p-2">Name</td>
                        <td> <input type="name" className="border border-gray-400 outline-none rounded-lg hover:border-blue-600 hover:border-2" required value={formData.name}
                            onChange={(e) => {
                                const { value } = e.target;
                                handleFormDataChange("name", value);
                                
                            }
                            } />
                        </td>
                    </tr>
                    <tr >
                        <td className="p-2">Email</td>
                        <td> <input className="border border-gray-400 outline-none rounded-lg hover:border-blue-600 hover:border-2" type="email" name="" id="" required value={formData.email}
                            onChange={(e) => {
                                const { value } = e.target;
                                handleFormDataChange("email", value);
                            }
                            } /> </td>
                    </tr>
                    <tr className="p-2">
                        <td colSpan={2} className=" text-center p-2 " > <button className=" bg-blue-600 text-white rounded-lg px-4 py-2" type="submit">{editIndex===null?"add ":"Edit"}</button> </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default Form