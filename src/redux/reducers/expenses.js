import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";
// const initialList=()=>{
//     const list=localStorage.getItem('expensesList');
//     let expenses = [];
//     if (list){
//         expenses=JSON.parse(list)
//     }
//     return expenses
// }
const initialState={
    ListExpenses:[],
    query:""
}
export const expenseReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_EXPENSE:{
            localStorage.setItem("expensesList",JSON.stringify([...state.ListExpenses,action.data]));
            return{
                ...state,
                ListExpenses:[...state.ListExpenses,action.data],
            };
        }
        case DELETE_EXPENSE:{
            const {data}=action;
            const updateList=state.ListExpenses.filter(
                item=> item.createdAt!==data.createdAt);
            localStorage.setItem("expensesList",JSON.stringify(updateList))
            return{
                ...state,
                ListExpenses:updateList,
            };
        }
        case SEARCH_EXPENSE:{
            const {query} =action;
            return{
                ...state,
                query,
            };
        }
        default:
            return state;
    }
}
