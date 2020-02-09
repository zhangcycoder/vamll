//存储的数据应该统一格式



//存储
export function storeObject(key,objects) {
    localStorage.setItem(key,JSON.stringify(objects))
}
//读取
export function getObject(key) {
  return JSON.parse(localStorage.getItem(key)) 
}

//清空
export function removeStoreObject(key) {
    localStorage.removeItem(key)
}