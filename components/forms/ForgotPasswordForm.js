import { SyncOutlined } from "@ant-design/icons";

const ForgotPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  newPassword,
  setNewPassword,
  secret,
  setSecret,
  loading,
  page,
}) => (
  <form action="" onSubmit={handleSubmit}>
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
      />
    </div>
    <div className="form-group p-2">
      <small>
        <label htmlFor="" className="text-muted">
          New Password
        </label>
      </small>
      <input
        type="password"
        className="form-control"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
    </div>

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

    <div className="form-group p-2">
      <button
        disabled={!email || !newPassword || !secret }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </div>
  </form>
);

export default ForgotPasswordForm;
