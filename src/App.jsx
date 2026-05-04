import './App.css'
import MyTable from './components/MyTable'
import employees from './data/employees'

function App() {

    const columns = [
    { key: 'id', label: 'رقم الوظيفة' },
    { key: 'name', label: 'اسم الموظف' },
    { key: 'department', label: 'القسم' },
    { key: 'title', label: 'المسمى الوظيفي' }

  ]
  
  return (
    <>
      <div className = {'hedar'}>
        <h1>Get started</h1>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <MyTable
        columns={columns}
        data={employees}
        onRowClick={(row) => alert(`اخترت: ${row.name}`)}
      />

      <div className="ticks"></div>
    </>
  )
}


export default App
