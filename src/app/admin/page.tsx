import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import { Suspense } from "react";

const AdminPage = () => {
	return (
		<div>
			<div>
				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPosts />
					</Suspense>
				</div>
				<div>
					<AdminPostForm />
				</div>
				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>
				<div>
					<AdminUserForm />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
