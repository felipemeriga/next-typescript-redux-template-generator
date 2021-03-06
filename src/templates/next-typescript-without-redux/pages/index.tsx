import Link from 'next/link'
import Layout from '../components/Layout'
import * as React from "react";

interface IState {}

type Props = IState

class App extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Layout title="Home | Next.js + TypeScript Example">
                <h1>Hello Next.js 👋</h1>
                <p>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </p>
            </Layout>
        );
    }
}

export default App;

