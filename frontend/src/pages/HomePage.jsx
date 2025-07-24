import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import useSidebarStore from "../store/useSidebarStore";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const { isOpen } = useSidebarStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center h-full">
        <div className="bg-base-100 rounded-lg shadow-xl w-full h-full">
          <div className="flex h-full rounded-lg overflow-hidden">
            <div
              className={`transition-all duration-200 ease-in-out ${
                isOpen ? "w-72" : "w-0"
              } lg:w-72`}
            >
              <Sidebar />
            </div>

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
