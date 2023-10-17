import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <form className="writeForm">
            
            <img className="writeImg" src="https://imgs.search.brave.com/9EaRvVtBimg9KEYvUCZE200X3NhQu0FEVV-zgkim-mQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjkw/Mzg2L3BleGVscy1w/aG90by0yOTAzODYu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" alt="" />
            <div className="writeFormGroup">
                
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>

                <input type="text" placeholder="Title" className="writeInput"
                    autoFocus = {true}
                />

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story... " type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
