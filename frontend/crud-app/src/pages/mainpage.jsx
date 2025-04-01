
return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Enter name"
      />
      <input 
        type="number" 
        name="age" 
        value={formData.age} 
        onChange={handleChange} 
        placeholder="Enter age"
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Enter email"
      />
      <button type="submit">Add</button>
    </form>
  );
import { useState } from "react";