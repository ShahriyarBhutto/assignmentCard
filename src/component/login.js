function Login({name,price,decrip,url}){
  return(

    <div className="w-25">
        <p>
            {name}
        </p>
        {price}
        <p>
        {decrip}
        </p>
        <img src={url}/>
        <button className="btn btn-dark">add Card</button>

    </div>)
}

export default Login;