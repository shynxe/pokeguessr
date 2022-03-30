import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FaUndo} from "react-icons/fa";
import Logo from "../images/game_icon.svg"

const Result = () => {
    const [searchParams] = useSearchParams({});
    const score = searchParams.get("score");
    const navigate = useNavigate();
    const resetScore = () => {
        navigate({
            pathname: "/game",
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                width: "100%",
                alignItems: "center",

            }}
        >


            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <img src={Logo} style={{
                        position: 'absolute',
                        h: "80%",
                        opacity: ".3",
                        top: "10%",
                        width: "50%",
                        zIndex: 0,
                    }} alt={'logo'}/>
                    />
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{fontWeight: "bold", margin: "0.5rem"}}
                        textAlign="center"
                    >
                        Your score is: {score}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "25px",
                            padding: "8px 30px 6px 30px",
                            border: "2px black solid",
                            color: "black",
                            textAlign: "center",
                            background: "linear-gradient(0deg, white 50%, red 50%)",
                        }}
                        onClick={() => {
                            resetScore();
                        }}
                    >
                        Restart Quiz
                        <FaUndo/>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Result;
