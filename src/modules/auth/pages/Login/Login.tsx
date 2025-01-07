
import style from './Login.module.scss'; 

const Login: React.FC = () => {
     return (
       <>
          <div className='absolute top-0 left-0 w-full h-full z-100'>
            <img className="w-full bg-gradient-to-r from-black" src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg' alt='background-img'/>
          </div>
          <div className={`flex justify-center items-center h-screen relative bottom-20`}>
            <div className={style.loginContainer}>
              <form className="w-full p-12 bg-black bg-opacity-85 rounded-md">
                <header>
                  <h1 className='text-white text-4xl mb-8'>Sign In</h1>
                </header>
                <input type="email" placeholder='Email Address' className=" w-full px-4 py-2 border border-gray-300 rounded-md my-3"/>
                <input type="password" placeholder='Password' className="w-full px-4 py-2 border border-gray-300 rounded-md my-3"/>

                <button className='bg-red-600 text-white px-4 py-2 rounded w-full my-3'>Sign In</button>
              </form>
            </div>
          </div>
       </>
     )
  };
  
export default Login;