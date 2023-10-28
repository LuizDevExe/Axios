import './NewPost.css'

const NewPost = () => {
  return (
    <div className='new-post'>
      <h2>Inserir novo Post:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id='title'
            placeholder='Digite o título'
          />
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
          name="body" 
          id="body" 
          placeholder='DIgite o conteúdo'
          ></textarea>
          <input type="submit" value="Criar post" className="btn" id='submit'/>
        </div>
      </form>
    </div>
  )
}

export default NewPost