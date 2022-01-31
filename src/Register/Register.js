import React from 'react';

export default function Register() {
    return (<div className='container'>
        <form>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>);
}
