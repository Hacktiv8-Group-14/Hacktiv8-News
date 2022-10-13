function NewsCardContainer({children}) {
    return(
        <div className="mt-4 w-11/12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {children}
        </div>
    )
}

export default NewsCardContainer