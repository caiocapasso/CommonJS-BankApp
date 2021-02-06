const HeadersDefault = (tokenSection) => {
    let headersApp = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenSection
        }
    }

    return headersApp;
}

export default HeadersDefault;