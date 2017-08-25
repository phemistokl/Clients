import { combineReducers } from 'redux';

const InitialState = [
	{
		id: 0,
		name: "Иван Петров",
		phone: "+79999999999",
		email: "1111@dwdw.com",
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---",
	},
	{
		id: 1,
		name: "Иван Петров",
		phone: "+79999999999",
		email: "1111@dwdw.com",
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---",
	},
	{
		id: 2,
		name: "Иван Петров",
		phone: "+79999999999",
		email: "1111@dwdw.com",
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---",
	},
	{
		id: 3,
		name: "Иван Петров",
		phone: "+79999999999",
		email: "1111@dwdw.com",
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---",
	},
	{
		id: 4,
		name: "Иван Петров",
		phone: "+79999999999",
		email: "1111@dwdw.com",
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---",
	},
];

function client(state = {}, action) {
	switch (action.type) {
		case 'ADD_CLIENT': {
			return {
					id: action.id,
					name: action.name,
					phone: action.phone,
					email: action.email,
					date: action.date,
					summ: action.summ,
					viewers: action.viewers,
					abonement: action.abonement
				}
		}

		case 'CURRENT_CLIENT': {
        return state.id == action.id;
    }

		case 'UPDATE_CLIENT': {
			if (state.id == action.id) {
				return {
						id: action.id,
						name: action.name,
						phone: action.phone,
						email: action.email,
						date: action.date,
						summ: action.summ,
						viewers: action.viewers,
						abonement: action.abonement
					}
				} else {
					return state
				}
    }

		case 'DELETE_CLIENT': {
        return state.id !== action.id;
    }

		default: {
			return state;
		}
	}
};

function clients(state = { clients: InitialState, current: [{id: ""}] }, action) {
	switch (action.type) {
		case 'ADD_CLIENT': {
			return {
        ...state,
        clients: [...state.clients,
					client(undefined, action)
				]
      }
		}

		case 'CURRENT_CLIENT': {
      return {
				...state,
				current: state.clients.filter(item => client(item, action))
			}
    }

		case 'UPDATE_CLIENT': {
      return {
				...state,
				clients: state.clients.map(item => client(item, action))
			}
    }

		case 'DELETE_CLIENT': {
      return {
				...state,
				clients: state.clients.filter(item => client(item, action))
			}
    }

		default: {
			return state;
		}
	}
};

function form( state = { isOpen: false, newEntry: false }, action) {
    switch(action.type) {
      case 'OPEN_FORM':
        return {
          ...state,
          isOpen: true
        };
			case 'CLOSE_FORM':
	        return {
	          ...state,
	          isOpen: false
	        };
      case 'CREATE_CLIENT':
        return {
          ...state,
          newEntry: true
        };
      case 'CURRENT_CLIENT':
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
};

export default combineReducers({ clients, client, form });
