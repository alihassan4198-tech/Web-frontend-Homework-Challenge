import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Divider, Grid, CircularProgress } from "@mui/material";
import {
  Avatar,
  AvatarWrapper,
  ButtonText,
  CardDiv,
  Container,
  Container1,
  LinkButton,
  Subtitle,
  Title,
  Username,
} from "./index.style";

export const Cards = () => {
  const [contributors, setContributors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/angular/angular/contributors?page=${page}&per_page=25`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.length === 0) {
          setIsLastPage(true);
        } else {
          setContributors((prevContributors) => [...prevContributors, ...data]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading ||
      isLastPage
    )
      return;
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isLastPage]);

  return (
    <>
      <Box className="main-div">
        <div className="heading">Top Contributors</div>
        <Divider />
        <Grid container spacing={2} mt={2}>
          {contributors &&
            contributors.map((contributor, index) => (
              <Grid item lg={3} sm={4} xs={12} key={index}>
                <CardDiv>
                  <Container>
                    <AvatarWrapper>
                      <Avatar>
                        <Image
                          src={
                            contributor.avatar_url
                              ? contributor.avatar_url
                              : "/svgs/user-image.svg"
                          }
                          alt="icon"
                          height={61}
                          width={62}
                        />
                      </Avatar>
                      <Username>@github</Username>
                    </AvatarWrapper>
                    <Image
                      src={"/svgs/compass-icon.svg"}
                      alt="icon"
                      height={32}
                      width={32}
                    />
                  </Container>
                  <Title>{contributor.login}</Title>
                  <Subtitle>{contributor.contributions}</Subtitle>
                  <Container1>
                    <LinkButton
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonText>VIEW REPOSITORIES</ButtonText>
                    </LinkButton>
                  </Container1>
                </CardDiv>
              </Grid>
            ))}
        </Grid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {loading && <div>loading....</div>}
        </div>
      </Box>
    </>
  );
};
