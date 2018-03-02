const initialState = {
    id: 0,
    name: '',
    description: '',
    address: '',
    city: '',
    states: '',
    zip: '',
    url: '',
    loan: '',
    mortgage: '',
    rent: '',
}

const ID = "ID";
const NAME = "NAME";
const DESCRIPTION = "DESCRIPTION";
const ADDRESS = "ADDRESS";
const CITY = "CITY";
const STATES = "STATES";
const ZIP = "ZIP";
const IMAGE_URL = "IMAGE_URL";
const LOAN_AMOUNT = "LOAN_AMOUNT";
const MORTGAGE = "MORTGAGE";
const RENT = "RENT";


function reducer(state = initialState, action) {
    switch (action.type) {
        case ID:
        return Object.assign({}, state, {id: action.payload})
        case NAME:
            return Object.assign({}, state, { name: action.payload });
        case DESCRIPTION:
            return Object.assign({}, state, { description: action.payload });
            case ADDRESS:
            return Object.assign({}, state, {address: action.payload});
            case CITY:
            return Object.assign({}, state, {city: action.payload});
            case STATES:
            return Object.assign({}, state, {states: action.payload});
            case ZIP: 
            return Object.assign({}, state, {zip: action.payload});
            case IMAGE_URL:
            return Object.assign({}, state, {url: action.payload});
            case LOAN_AMOUNT:
            return Object.assign({}, state, {loan: action.payload});
            case MORTGAGE: 
            return Object.assign({}, state, {mortgage: action.payload});
            case RENT:
            return Object.assign({}, state, {rent: action.payload});
        default:
            return (state)
    }
}


export function userId(id){
    return {
        type: ID,
        payload: id
    }
}

export function updateName(name) {
    return {
        type: NAME,
        payload: name
    }
}

export function updateDescription(description) {
    return {
        type: DESCRIPTION,
        payload: description
    }
}

export function updateAddress(address) {
    return {
        type: ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: CITY,
        payload: city
    }
}

export function updateState(states) {
    return {
        type: STATES,
        payload: states
    }
}

export function updateZip(zip) {
    return {
        type: ZIP,
        payload: zip
    }
}

export function updateUrl(url) {
    console.log(url)
    return {
        type: IMAGE_URL,
        payload: url
    }
}

export function updateLoanAmount(loan) {
    return {
        type: LOAN_AMOUNT,
        payload: loan
    }
}

export function updateMortgage(mortgage) {
    return {
        type: MORTGAGE,
        payload: mortgage
    }
}

export function desiredRent(rent) {
    return {
        type: RENT,
        payload: rent
    }
}


export default reducer;