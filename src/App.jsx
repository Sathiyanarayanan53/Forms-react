import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  const intialFormData = {
    name: "",
    email: "",
  }
  const [formData, setFormData] = useState(intialFormData);
  const [tableData, setTableData] = useState([]);
  const [EditIndex, setEditIndex] = useState(null);
  const handleFormDataChange = (key, value) => {
    // console.log({ key, value });
    setFormData({
      ...formData,
      [key]: value,
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log("form Submit", formData);
    if (EditIndex == null) {
      setTableData([...tableData, formData]);
      setFormData(intialFormData);
    } else {
      tableData[EditIndex] = formData;
      setTableData(tableData);
      setEditIndex(null);
    }

  };
  const handleEdit = (index) => {
    console.log("edit ckick on row", index);
    const clickItem = tableData[index];
    setFormData(clickItem);
    setEditIndex(index);
  }
  const handleDelete=(index)=>{
    tableData.splice(index,1);
    setTableData([...tableData]);
  }
  return (
    <>
      <Form EditIndex={EditIndex} formData={formData} handleFormDataChange={handleFormDataChange} handleSubmit={handleSubmit} />
      <Table handleDelete={handleDelete} tableData={tableData} handleEdit={handleEdit} />

    </>
  )
}

export default App
