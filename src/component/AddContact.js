import React from "react";

class AddContact extends React.Component {

  state = {
    name: '',
    email: '',
  }

  render() {
    return (
      <div className="container mx-auto">
        <label className="block">
          <span className=" pb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Name
          </span>
          <input
            type="name"
            name="name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 outline-double outline-3 outline-offset-2 ..."
            placeholder="enter name"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
          />
        </label>

        <label className="block pt-8">
          <span className="pb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 outline-double outline-3 outline-offset-2 ..."
            placeholder="you@example.com"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </label>
        <div className="add-button">
        <button class="rounded-full ...">Save Changes</button>
        </div>
      </div>
    );
  }
}

export default AddContact;
