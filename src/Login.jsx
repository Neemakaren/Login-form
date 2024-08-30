import { useRef, useState, useEffect } from 'react'

const Login = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState()
    const [success, setSuccess] = useState(false);

    useEffect(() => {
    userRef.current.focus()
    }, [])

    useEffect(() => {
      setErrMsg('')
    }, [user, password])

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user, password)
      setUser('')
      setPassword('')
      setSuccess(true)
    }
    

  return (
    <>
    {
      success ? (
        <section>
          <h1>You are Logged In</h1>
          <br/>
          <p>
            <a href="#">Go To Home</a>
          </p>
        </section>
      ) : (
    <section>
        <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
                <button>Sign In</button>
        </form>
        <p>
            Need An Account?<br/>
            <a href="#">Sign Up</a>
        </p>
    </section>
    )}
    </>
  )
}

export default Login