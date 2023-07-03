import { useState,createContext,useContext } from "react";

export const UserContext = createContext();
export const UserChangeContext = createContext();


export const UserProvider = (props) => {

const [User,setUser] = useState([{ mail: '.', pass: '.'}]);

const ChangePass = (jsonuser) => 
{
    setUser(jsonuser);
    console.log("Funcion ChangePass");
    console.log(jsonuser);
}

return (
  <UserContext.Provider  value={User}>
      <UserChangeContext.Provider value={ChangePass} >
          {props.children}
      </UserChangeContext.Provider>
  </UserContext.Provider>
);
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserChangeContext () {
  return useContext(UserChangeContext);
}


export const CitizenTest = async (id) => {
  let url = 'https://raw.githubusercontent.com/sirfreedom/TestSpainCitizen/main/test.json';
  let res;
  let data = [];
  let tempdata = [];

  let lIndex = [];
  let lQuestion = [];
  try {
  res = await fetch(url);
  tempdata = await res.json().catch(err => console.log(err));

  if (id === 0){
    data = tempdata;
  }

  if (id > 0 ){
    data = tempdata.filter(x => x.level == id);    
  }

  while (lIndex.length <= 25) 
  {
    let n;
    n = Math.floor(Math.random() * (data.length - 0 + 1));
 
    if (lIndex.indexOf(n) === -1 )
    {
       lIndex.push(n);
    }
  }

  for (let i in lIndex) {
    lQuestion.push(data[lIndex[i]]);
  }

  }
  catch(ex){
    console.log(ex);
  }
  return lQuestion;
}





export const getStorage = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const setStorage = (key, value) =>
{
  localStorage.setItem(key, JSON.stringify(value));
}





