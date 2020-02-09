/** 
 * 本地存储的入口文件
 * {
 * data:任意数据类型
 * }
*/
import { storeObject,getObject,removeStoreObject} from './localStorage'
import { SEARCHHISTORY} from './localConfig'

export let setSearchKey = (object) => {
    storeObject(SEARCHHISTORY,object)
}
export let getSearchKey = () => {
   return getObject(SEARCHHISTORY)
}
export let clearSearchHistory = () => {
    removeStoreObject(SEARCHHISTORY)
}