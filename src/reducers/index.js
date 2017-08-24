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
		case 'CHANGE_CLIENT':
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

		case 'DELETE_CLIENT': {
        return state.id !== action.id;
    }

		default: {
			return state;
		}
	}
};

function clients(state = InitialState, action) {
	switch (action.type) {
		case 'CHANGE_CLIENT':
		case 'ADD_CLIENT': {
			return [
				...state,
				client(undefined, action)
			];
		}

		case 'DELETE_CLIENT': {
      return state.filter(item => client(item, action));
    }

		default: {
			return state;
		}
	}
};

function form( state = { isOpen: false, newEntry: false }, action) {
    switch(action.type) {
      case 'TOGGLE_FORM':
        return {
          ...state,
          isOpen: !state.isOpen
        };
      case 'CREATE_CLIENT':
        return {
          ...state,
          newEntry: true
        };
      case 'EDIT_CLIENT':
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
};

export default combineReducers({ client, clients, form });
