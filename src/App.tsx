


import { ComponentCounter } from './components/componentCounter/ComponentCounter'
import { PrimerComponente } from './components/PrimerComponente/PrimerComponente'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect'
import { FormComponent } from './components/FormComponent/FormComponent'
import { AppProduct } from './components/AppProduct/AppProduct'

export const App = () => {


  return (
    <div style={{display:'flex', flexDirection:"column", gap:'2vh'}}>
        {/* <PrimerComponente texto={"YESTERDAAAAAY"} color="red" fontSize={5}/>
      
         <ComponentCounter/>
        
        <ComponentUseEffect/>
        
        <FormComponent/> */}

          <AppProduct/>
    </div>
  )
}
