import Header from "@/components/Header";
import {getProviders, signIn as SignIntoProvider} from "next-auth/react"

function signIn({providers}) {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <p className="font-xs italic mt-40 ">APLICATIVO DE TESTE PARA ONGS</p>
    <div className="mt-10">
    {Object.values(providers).map((provider)=>(
        <div key={provider.name}>
            <button  className="p-3 bg-blue-500 rounded-lg text-white" onClick={() =>
            SignIntoProvider(provider.id,{callbackUrl:"/"})}>
                sign in with {provider.name}
            </button>
        </div>
        
    ))}
    </div>
    </div>
    </>
  );
}


export async function getServerSideProps() {
    const providers = await getProviders();
    
    return{
        props:{
            providers,
        }
    }

}

export default signIn;