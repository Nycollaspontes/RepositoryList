import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
//https://api.github.com/orgs/rocketseat/repos
interface Repository {
    name: string;
    description  :string;
    html_url: string;

}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositorios. </h1>
            {/* Sempre que usar um map o primeiro elemento tera que receber
        a Propriedade Key para passando algo como parametro para nao
        termos repeticoes de nomes. */}
            <ul>
                {repositories.map(repository => {
                    return (<RepositoryItem
                        key={repository.name} repository={repository} />)
                })}

            </ul>


        </section>
    )
}