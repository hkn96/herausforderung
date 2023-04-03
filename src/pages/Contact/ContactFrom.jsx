import React from 'react';

const ContactFrom = () => {
  return (
    <div className='row-mb-5'>
      <div className='colmd-12'>
        <form
          action='#'
          className='probootstrap-form mb-5'
        >
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='fname'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='fname'
                  name='fname'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='fname'>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='lname'
                  name='lname'
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
            />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              className='form-control'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              className='btn btn-primary'
              value='Send Message'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
