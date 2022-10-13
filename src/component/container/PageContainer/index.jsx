function PageContainer({children}) {
    return(
        <div className="mt-20 mb-10 w-full flex flex-col items-center">
            {children}
        </div>
    )
}

export default PageContainer