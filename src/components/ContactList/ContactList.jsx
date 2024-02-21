const ContactList = ({ contacts }) => {
    <ul>
        {contacts.length>0? contacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
        )
        ):<div>rvdrr</div>}
    </ul>
}

export default ContactList;