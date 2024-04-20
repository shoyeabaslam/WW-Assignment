import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import { Role } from '../../types/Enum';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role:''
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(formData)
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <form className="border px-5 py-4  backdrop:blur-sm rounded-xl shadow-lg bg-white/100" onSubmit={handleSubmit}>
            <h1 className='text-xl font-bold text-center mb-5'>Register</h1>
            
            <InputField name='name' type='name' inputValue={formData.name} handleChange={handleChange} placeholder='Name'/>
            <InputField name='email' type='email' inputValue={formData.email} handleChange={handleChange} placeholder='Email Address' />
            <InputField name='phone' type='number' inputValue={formData.phone} handleChange={handleChange} placeholder='Phone Number' />
            <InputField name='password' type='password' inputValue={formData.password} handleChange={handleChange} placeholder='Password'/>

            <div className='mb-5 flex justify-start space-x-8 ml-1'>
                <div className='flex space-x-4 items-center'>
                    <input type='radio' className="form-radio h-4 w-4" value={Role.Employee} onChange={handleChange} name='role'/>
                    <label htmlFor='radio' >{Role.Employee}</label>
                </div>
                <div className='flex space-x-4 items-center'>
                    <input type='radio' className="form-radio h-4 w-4" value={Role.Manager} onChange={handleChange} name='role'/>
                    <label htmlFor='radio' >{Role.Manager}</label>
                </div>
            </div>
            <div className='my-3 flex flex-col'>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Register
              </button>
              <Link className='text-center underline py-3' to='/'>Have an account?</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
