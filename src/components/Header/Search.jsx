import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState('');
    return (
            <div className="search-container">
                <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <NumResult/>
            </div>
    )
}

function NumResult() {
    return (
        <p className="search-results">
            Found <strong>4</strong> results
        </p>
    )
}
    
