import { useState } from "react";

import Modal from "./Modal";

const getKeyValuePairs = (o) => {
  let res = {};

  for (const key in o) {
    if (typeof o[key] === "object") {
      res = {
        ...res,
        ...getKeyValuePairs(o[key]),
      };
    } else {
      res[key] = o[key];
    }
  }

  return res;
};

const User = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((showModal) => !showModal);

  const userDetails = Object.entries(getKeyValuePairs(user)).map(
    ([k, v], idx) => (
      <p key={idx}>
        {k}: {v}
      </p>
    )
  );

  return (
    <div>
      <p onClick={toggleModal}>{user.name}</p>
      {showModal ? (
        <Modal>
          {userDetails}
          <button onClick={toggleModal}>Close Modal</button>
        </Modal>
      ) : null}
    </div>
  );
};

export default User;
