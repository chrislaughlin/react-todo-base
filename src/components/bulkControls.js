const BulkControls = ({ setTodos }) => {
    return (
        <div>
            <button
                onClick={() => {
                    setTodos((curr) => {
                        return curr.map((todo) => {
                            return {
                                ...todo,
                                complete: true
                            };
                        });
                    });
                }}
            >
                Complete All
            </button>
        </div>
    );
};

export default BulkControls;
