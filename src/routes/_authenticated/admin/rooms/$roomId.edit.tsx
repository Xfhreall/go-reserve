import { createFileRoute } from '@tanstack/react-router';
import { AdminRoomEditPage } from '@/features/rooms/components/admin-room-edit-page';

export const Route = createFileRoute(
	'/_authenticated/admin/rooms/$roomId/edit',
)({
	component: EditRoomRoute,
});

function EditRoomRoute() {
	const { roomId } = Route.useParams();
	return <AdminRoomEditPage roomId={roomId} />;
}
