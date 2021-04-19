const axios = require('axios');
const { useEffect, useState } = require('react');

const ClientCard = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const load = async () => {
      const data = (await axios.get('/api/clients')).data;
      setState(data);
    };
    if (!state) {
      load();
    }
    if (state) {
      console.log('state: ' + state);
    }
  }, [state]);
  return (
    <div>
      {state &&
        state.length > 0 &&
        state.map((client) => {
          return (
            <div key={client.id}>
              id: {client.id}
              <br />
              cash: {client.cash}
              <br /> credit: {client.credit}
            </div>
          );
        })}
    </div>
  );
};
export default ClientCard;
