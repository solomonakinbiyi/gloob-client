import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => (
  <form action="" onSubmit={handleSubmit}>
    {profileUpdate && (
      <div className="form-group p-2">
        <small>
          <label htmlFor="" className="text-muted">
            Username
          </label>
        </small>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    )}

    {profileUpdate && (
      <div className="form-group p-2">
        <small>
          <label htmlFor="" className="text-muted">
            About
          </label>
        </small>
        <input
          type="text"
          className="form-control"
          placeholder="Write about yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
    )}
    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label htmlFor="" className="text-muted">
            Your name
          </label>
        </small>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    )}
    <div className="form-group p-2">
      <small>
        <label htmlFor="" className="text-muted">
          Email Address
        </label>
      </small>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={profileUpdate}
      />
    </div>
    <div className="form-group p-2">
      <small>
        <label htmlFor="" className="text-muted">
          Password
        </label>
      </small>
      <input
        type="password"
        className="form-control"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    {page !== "login" && (
      <>
        <div className="form-group p-2">
          <small>
            <label htmlFor="" className="text-muted">
              Pick a question
            </label>
          </small>
          <select name="" id="" className="form-control">
            <option value="">What is your favorite color?</option>
            <option value="">What is your best friend's name?</option>
            <option value="">What city were you born?</option>
          </select>
          <div className="form-text text-muted">
            You can use this to reset your password if forgotten.
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Write your answer here"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
        </div>
      </>
    )}

    <div className="form-group p-2">
      <button
        disabled={
          profileUpdate
            ? loading
            : page === "login"
            ? !email || !password
            : !name || !email || !secret || !password
        }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
