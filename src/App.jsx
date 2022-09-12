import React, { useEffect, useState } from "react";
import "./styles/small_queries.css";
import { Container, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import Search from "./components/searcher/index.jsx";
import UserCard from "./components/userCard/index";
import gettingUser from "./services/user.js";
const container = {
        background: "whitesmoke",
        width: "70vw",
        height: "75vh",
        borderRadius: "16px",
        marginTop: "7vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
};
const paper = {
        width: "75vw",
        height: "75vh",
        padding: "1%",
        marginTop: "3%  !important",
        margin: "auto",
        borderRadius: "1%",
}
const fetMsg = {
        width: "100vw",
        marginTop: "2%",
        flexDirection: "column-reverse",
        alignItems: "center",
        marginBottom: "-50px",
        marginLeft: "-15%"
};
const App = () => {
        const [ inputUser, setInputUser ] = useState("octocat");
        const [ data, setData ] = useState('');
        const [ fetchMsg, setFetchMsg ] = useState();
        // const [ userStates, setUserStates ] = useState('user')
        const ERROR = (
                <Stack sx={fetMsg} spacing={2}>
                        <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error traying to fetch — <strong>{inputUser}</strong> from
                                Github.
                        </Alert>
                </Stack>
        );
        const SUCC = (
                <Stack sx={fetMsg} spacing={2}>
                        <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Your seek was successful. <strong>{inputUser}</strong>
                        </Alert>
                </Stack>
        );

        useEffect(async () => {
                // (async () => {
                try {
                        const res = await gettingUser(inputUser);
                        if (inputUser === "octocat") {
                                localStorage.setItem("octocat", JSON.stringify(res));
                        }
                        if (res.message === "Not Found") {
                                const octocat = JSON.parse(localStorage.getItem("octocat"));
                                return setData(octocat);
                        }
                        setFetchMsg(SUCC);
                        return setData(res);
                } catch (err) {
                        setFetchMsg(ERROR);
                        console.log("error in useEffect ", err.message);
                }
                // })();
        }, [ inputUser ]);
        //en el array podemos pasarle un valor queeste escuchando,
        setTimeout(() => {
                setFetchMsg(" ");
        }, 5000);
        return (
                <>
                        <Paper sx={paper} elevation={3} className="paper">
                                {fetchMsg}
                                <Container sx={container} className="container">
                                        <Search inputUser={inputUser} setInputUser={setInputUser} />
                                        <UserCard data={data} />
                                </Container>
                        </Paper>
                </>
        );
};
export default App;
//f9f9f9
