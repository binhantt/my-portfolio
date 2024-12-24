const LoadingSpinner = ()=>{

  {loading  ? (<span class="loader"></span>) : (
    <div>
       {/* <span class="loader"></span> */}
      {Object.keys(data).map((key) => (
        <div key={key} className="border p-4 rounded shadow-md">
          {/* <h3 className="font-bold">{key}</h3> */}
          <p>{data[key].id}</p>
          <p>{data[key].title}</p>
          <p>{data[key].author}</p>
        </div>
      ))}
    </div>
    )} 
}
export default LoadingSpinner ; 