import {useState, useEffect} from "react"
import '../assets/css/App.css';
import Card from "../components/Card"
import InData from "../components/InData"

function App() {
  const [datas, setDatas] = useState([])
  const [title, setTitle] = useState("Form Tambah")
  const [ids, setIds] = useState("")

  // data
  const [gambar, setGambar] = useState(null)
  const [nama, setNama] = useState('')
  const [agama, setAgama] = useState('')
  const [tl, setTl] = useState('')

  let formDatas = new FormData()
  formDatas.append("gambar", gambar)
  formDatas.append("nama", nama)
  formDatas.append("agama", agama)
  formDatas.append("tanggalLahir", tl)


  useEffect(() => {
    fetch('https://app-id1.herokuapp.com/id/get')
      .then(res => res.json())
      .then(res => setDatas(res.data))
  })

  const del = (e) => {
    fetch('https://app-id1.herokuapp.com/id/del/'+e, {
      method:"DELETE"
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const posting = (e) => {
    e.preventDefault()
    fetch('https://app-id1.herokuapp.com/id/post', {
      method: "POST",
      body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const editUp = (e) => {
    setTitle("Form Update")
    e.preventDefault()
    fetch('https://app-id1.herokuapp.com/id/put/'+ ids, {
      method: "PUT",
      body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const setEdit = () => {
    console.log(ids)
    setTitle("Form Update")
  }

  return (
    <>
    <h1 style={{marginLeft:"20px"}}>{title}</h1>
    <InData 
    editUp={editUp} 
    title={title} 
    set={setTitle} 
    posting={posting} 
    gambar={setGambar}
    nama={setNama} 
    agama={setAgama}
    tl={setTl}
    />
    <br /><br />
    <h1 style={{marginLeft:"20px"}}>Data Profile</h1>
    <div className="container">
      {datas.map((data,i) => 
        <Card 
        setEdit={setEdit}
        key={i} 
        foto={data.gambar} 
        nama={data.nama} 
        agama={data.agama} 
        tl={data.tanggalLahir} 
        del={del} 
        id={data._id} 
        setids={setIds}
        />
      )}
    </div>
    </>
  );
}

export default App;
