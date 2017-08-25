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

export const updateClient = (id, client) => {
	return {
		type: "UPDATE_CLIENT",
		id,
		name: client.name,
		phone: client.phone,
		email: client.email,
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

export const openForm = () => {
		return {
    		type: 'OPEN_FORM'
		};
};

export const closeForm = () => {
		return {
    		type: 'CLOSE_FORM'
		};
};

export const createClient = () => {
		return {
    		type: 'CREATE_CLIENT'
		};
};

export const currentClient = id => {
		return {
    		type: 'CURRENT_CLIENT',
				id
		};
};
