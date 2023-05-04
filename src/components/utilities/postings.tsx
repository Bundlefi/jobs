import React, { FC } from "react";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";
import Image from "next/image";
import Container from "./container";
import { PostFrontMatter } from "../providers/application/application.provider";
import Link from "next/link";

interface PostingProps {
  invert?: boolean;
  post: PostFrontMatter;
  image: string;
}

const Postings: FC<PostingProps> = ({ post, image, invert }) => {
  const Left = () => (
    <Pane>
      <Link href={post.path}>
        <Heading size={900}>{post.title}</Heading>
      </Link>
      <Link href={post.path}>
        <Paragraph size={500}>{post.summary}</Paragraph>
      </Link>
    </Pane>
  );

  const Right = () => null;
  // <Pane textAlign={invert ? "left" : "right"} border elevation={1}>
  //   <Image
  //     alt={image}
  //     src={image}
  //     width={60}
  //     height={60}
  //     layout="responsive"
  //     quality={100}
  //     loading="lazy"
  //   />
  // </Pane>

  const children = invert ? [Right, Left] : [Left, Right];

  return (
    <Pane
      minHeight="15vh"
      background={invert ? "tint1" : "white"}
      paddingY={majorScale(8)}
      borderTop
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden">
      <Container height="100%">
        <Pane
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between">
          <Pane width="50%" paddingX={majorScale(3)}>
            <Left />
          </Pane>

          {/* {children.map((Child, i) => (
            <Pane key={i} width="50%" paddingX={majorScale(3)}>
              <Child />
            </Pane>
          ))} */}
        </Pane>
      </Container>
    </Pane>
  );
};

export default Postings;
