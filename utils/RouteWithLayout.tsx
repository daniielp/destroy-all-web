function RouteWithLayout(props: any) {
    const {Layout, Component, pageProps} = props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  
  export default RouteWithLayout
  