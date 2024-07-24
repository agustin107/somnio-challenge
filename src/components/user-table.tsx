'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { User } from '@/types/user';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { useMemo, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from '@tanstack/react-table';
import { TablePagination } from './ui/table-pagination';

interface UserTableProps {
  users: User[];
}

interface SearchFormValues {
  search: string;
}

export function UserTable({ users }: UserTableProps) {
  const [localUsers, setLocalUsers] = useState(users);
  const form = useForm<SearchFormValues>({
    defaultValues: {
      search: '',
    },
  });

  const columns = useMemo<ColumnDef<Partial<User>>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        cell: (info) => info.getValue(),
      },
      {
        id: 'email',
        accessorKey: 'email',
        cell: (info) => info.getValue(),
      },
      {
        id: 'username',
        accessorKey: 'username',
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: localUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const handleSubmit = (values: SearchFormValues) => {
    const search = values.search.toLowerCase();
    const filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.username.toLowerCase().includes(search)
      );
    });

    setLocalUsers(filteredUsers);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full'>
        <FormField
          name="search"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex w-full items-center space-x-2 mb-4">
              <FormControl className="mt-2">
                <Input placeholder="Search users" {...field} />
              </FormControl>
              <Button type="submit" className="mt-0">
                Search
              </Button>
            </FormItem>
          )}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {localUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  <Button variant="outline">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                <TablePagination table={table} />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </form>
    </Form>
  );
}
