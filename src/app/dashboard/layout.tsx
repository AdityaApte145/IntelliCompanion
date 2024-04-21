const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="md:h-screen">
            {children}
        </div>
    );
}

export default HomeLayout;