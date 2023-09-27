import React, { useRef } from 'react';
import { Container, Flex, Grid, MasonryLayout } from './lib';

const MOCK_IMAGE_DATA = [
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://github.com/woowacourse/layout-component/assets/80146176/e082c132-298a-4d38-b9cf-b34eedc6dd3e',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
  'https://plus.unsplash.com/premium_photo-1664302728159-60aaaab63653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2782&q=80',
  'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2816&q=80',
];

function App() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <Container
        ref={ref}
        bgColor="red"
        fullScreen
        maxWidth="400px"
        css={{ color: 'blue' }}
      >
        asdasd
      </Container>
      <Flex gap="100px">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Flex>
      <Grid
        rows="repeat(3, 200px)"
        columns={3}
        gap="100px"
        columnGap="10px"
        rowGap="10px"
      >
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Grid>
      <MasonryLayout gap="10px" itemSize={300} fullScreen as="div">
        {MOCK_IMAGE_DATA.map((item) => (
          <a key={item} href="www.naver.com">
            <img style={{ width: '100%' }} src={item} alt="안녕" />
          </a>
        ))}
      </MasonryLayout>
    </>
  );
}

export default App;
