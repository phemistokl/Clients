export const addClient = client => {
	return {
		type: "ADD_CLIENT",
		id: Date.now(),
		name: client.name,
		phone: client.phone,
		email: client.email,
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---"
	};
};

export const changeClient = client => {
	return {
		type: "CHANGE_CLIENT",
		id,
		name,
		phone,
		email,
		date: "---",
		summ: "---",
		viewers: "---",
		abonement: "---"
	};
};

export const deleteClient = id => {
    return {
        type: 'DELETE_CLIENT',
        id
    };
};

export const toggleForm = () => {
		return {
    		type: 'TOGGLE_FORM'
		};
};

export const createClient = () => {
		return {
    		type: 'CREATE_CLIENT'
		};
};

export const editClient = id => {
		return {
    		type: 'EDIT_CLIENT',
				id
		};
};
