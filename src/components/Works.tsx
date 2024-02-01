import "../css/Works.css"
const Works = () => {
  const imgs = [
    {title: "AAA", description: ".......", img: ""},
    {title: "BBB", description: ".......", img: ""},
    {title: "CCC", description: ".......", img: ""},
    {title: "DDD", description: ".......", img: ""},
    {title: "XXX", description: ".......", img: ""},
    {title: "YYY", description: ".......", img: ""},
    {title: "ZZZ", description: ".......", img: ""},
    {title: "WWW", description: ".......", img: ""},
  ]
  return (
    <div className="works">
      {imgs.map((data,idx)=>{
        return <div className="d-image" key={data.title}>
          <img src={data.img || "https://www.idsplus.net/wp-content/uploads/default-placeholder.png"} ></img>
        </div>
      })}
    </div>
  )
}

export default Works;
